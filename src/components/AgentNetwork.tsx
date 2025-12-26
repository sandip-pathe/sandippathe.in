"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Agent {
  id: string;
  name: string;
  type: "orchestrator" | "specialist" | "worker";
  x: number;
  y: number;
  status: "idle" | "thinking" | "active" | "communicating";
  task?: string;
  color: string;
}

interface Message {
  id: string;
  from: string;
  to: string;
  content: string;
  timestamp: number;
}

const AGENT_CONFIGS = [
  { id: "orchestrator", name: "Orchestrator", type: "orchestrator" as const, color: "#3B82F6", task: "Task Planning" },
  { id: "coder", name: "Code Agent", type: "specialist" as const, color: "#10B981", task: "Code Generation" },
  { id: "researcher", name: "Research Agent", type: "specialist" as const, color: "#8B5CF6", task: "Information Gathering" },
  { id: "designer", name: "Design Agent", type: "specialist" as const, color: "#EC4899", task: "UI/UX Design" },
  { id: "tester", name: "Test Agent", type: "worker" as const, color: "#F59E0B", task: "Quality Assurance" },
  { id: "analyzer", name: "Data Agent", type: "worker" as const, color: "#06B6D4", task: "Data Analysis" },
];

export default function AgentNetwork() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [connections, setConnections] = useState<Array<[number, number]>>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize agents in a circular formation
    const radius = 200;
    const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 400;
    const centerY = 300;

    const initialAgents = AGENT_CONFIGS.map((config, i) => {
      const angle = (i / AGENT_CONFIGS.length) * Math.PI * 2;
      return {
        ...config,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        status: "idle" as const,
      };
    });

    setAgents(initialAgents);

    // Create connections (orchestrator connects to all)
    const conns: Array<[number, number]> = [];
    for (let i = 1; i < AGENT_CONFIGS.length; i++) {
      conns.push([0, i]); // Connect orchestrator to each agent
    }
    // Specialists connect to workers
    conns.push([1, 4]); // Coder to Tester
    conns.push([2, 5]); // Researcher to Analyzer
    setConnections(conns);
  }, []);

  // Simulate agent activity
  useEffect(() => {
    const interval = setInterval(() => {
      setAgents((prev) =>
        prev.map((agent) => ({
          ...agent,
          status: ["idle", "thinking", "active", "communicating"][
            Math.floor(Math.random() * 4)
          ] as Agent["status"],
        }))
      );

      // Simulate message passing
      if (Math.random() > 0.7 && agents.length > 1) {
        const from = agents[Math.floor(Math.random() * agents.length)];
        const to = agents[Math.floor(Math.random() * agents.length)];
        if (from.id !== to.id) {
          const newMessage: Message = {
            id: Date.now().toString(),
            from: from.id,
            to: to.id,
            content: `${from.name} → ${to.name}`,
            timestamp: Date.now(),
          };
          setMessages((prev) => [...prev.slice(-3), newMessage]);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [agents]);

  // Draw connections on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || agents.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 600;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    connections.forEach(([fromIdx, toIdx]) => {
      const from = agents[fromIdx];
      const to = agents[toIdx];

      const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
      gradient.addColorStop(0, from.color + "40");
      gradient.addColorStop(1, to.color + "40");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    });
  }, [agents, connections]);

  const getStatusEmoji = (status: Agent["status"]) => {
    switch (status) {
      case "thinking": return "🤔";
      case "active": return "⚡";
      case "communicating": return "💬";
      default: return "💤";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas for connections */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      {/* Agent Nodes */}
      {agents.map((agent, idx) => (
        <motion.div
          key={agent.id}
          className="absolute pointer-events-auto"
          style={{
            left: agent.x,
            top: agent.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            scale: { delay: idx * 0.1, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, delay: idx * 0.3 }
          }}
        >
          <div className="relative group">
            {/* Agent Circle */}
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl cursor-pointer relative"
              style={{
                backgroundColor: agent.color + "20",
                border: `2px solid ${agent.color}`,
                boxShadow: agent.status === "active" ? `0 0 20px ${agent.color}80` : "none",
              }}
              animate={{
                scale: agent.status === "active" ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 0.5,
                repeat: agent.status === "active" ? Infinity : 0,
              }}
            >
              {getStatusEmoji(agent.status)}
              
              {/* Pulse effect for communicating */}
              {agent.status === "communicating" && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: `2px solid ${agent.color}` }}
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Agent Label - appears on hover */}
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
                <p className="text-xs font-bold text-foreground">{agent.name}</p>
                <p className="text-xs text-muted-foreground">{agent.task}</p>
                <p className="text-xs text-primary capitalize">{agent.status}</p>
              </div>
            </div>

            {/* Type Badge */}
            <div 
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs"
              style={{ backgroundColor: agent.color }}
            >
              {agent.type === "orchestrator" ? "🎯" : agent.type === "specialist" ? "🔬" : "⚙️"}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Message Feed */}
      <div className="absolute bottom-4 right-4 w-64 pointer-events-auto">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-xs font-semibold text-foreground">Agent Network</p>
          </div>
          <AnimatePresence mode="popLayout">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-xs text-muted-foreground py-1 border-b border-border/50"
              >
                {msg.content}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-4 left-4 pointer-events-auto">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl">
          <p className="text-xs font-semibold text-foreground mb-2">Multi-Agent System</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span>🎯</span>
              <span className="text-muted-foreground">Orchestrator</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span>🔬</span>
              <span className="text-muted-foreground">Specialist Agent</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span>⚙️</span>
              <span className="text-muted-foreground">Worker Agent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
