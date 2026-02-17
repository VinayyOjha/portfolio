import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
}

export const LeetCode = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        console.log("[v0] Fetching LeetCode stats for oVinayyy");
        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/oVinayyy`,
          { signal: AbortSignal.timeout(5000) }
        );
        
        console.log("[v0] Response status:", response.status);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        console.log("[v0] LeetCode data received:", data);
        
        setStats({
          totalSolved: data.totalSolved || 0,
          totalQuestions: data.totalQuestions || 0,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          acceptanceRate: parseFloat(data.acceptanceRate) || 0,
        });
      } catch (err) {
        console.log("[v0] LeetCode fetch error:", err);
        setError(err instanceof Error ? err.message : "Error fetching stats");
        // Set fallback data so page still loads
        setStats({
          totalSolved: 0,
          totalQuestions: 0,
          easySolved: 0,
          mediumSolved: 0,
          hardSolved: 0,
          acceptanceRate: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  const difficultyItems = stats
    ? [
        { label: "Easy", solved: stats.easySolved, color: "bg-green-500/20", textColor: "text-green-400", borderColor: "border-green-500/50" },
        { label: "Medium", solved: stats.mediumSolved, color: "bg-yellow-500/20", textColor: "text-yellow-400", borderColor: "border-yellow-500/50" },
        { label: "Hard", solved: stats.hardSolved, color: "bg-red-500/20", textColor: "text-red-400", borderColor: "border-red-500/50" },
      ]
    : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="px-2 md:px-4">
      <motion.div
        className="flex flex-col gap-8 font-mono text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading with Icon */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
          <Code size={28} className="text-blue-400" />
          <h2 className="text-2xl font-bold">LEETCODE</h2>
        </motion.div>

        {/* Stats Container */}
        {loading ? (
          <motion.div
            variants={itemVariants}
            className="text-center text-neutral-400 py-8"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading LeetCode stats...
            </motion.div>
          </motion.div>
        ) : error ? (
          <motion.div
            variants={itemVariants}
            className="text-center text-neutral-500 py-8"
          >
            <p>Stats unavailable • Check profile directly</p>
          </motion.div>
        ) : stats ? (
          <>
            {/* Main Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Total Solved */}
              <motion.div
                variants={hoverVariants}
                whileHover="hover"
                onClick={() => window.open("https://leetcode.com/oVinayyy", "_blank")}
                className="cursor-pointer p-4 rounded-sm border border-blue-500/30 bg-blue-500/10 hover:border-blue-400/60 transition-colors duration-300"
              >
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-neutral-400 text-sm">Problems Solved</p>
                  <motion.p
                    className="text-3xl font-bold text-blue-400"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                  >
                    {stats.totalSolved}
                  </motion.p>
                  <p className="text-xs text-neutral-500">
                    of {stats.totalQuestions} total
                  </p>
                </motion.div>
              </motion.div>

              {/* Acceptance Rate */}
              <motion.div
                variants={hoverVariants}
                whileHover="hover"
                className="p-4 rounded-sm border border-purple-500/30 bg-purple-500/10 hover:border-purple-400/60 transition-colors duration-300"
              >
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-neutral-400 text-sm">Acceptance Rate</p>
                  <motion.p
                    className="text-3xl font-bold text-purple-400"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                  >
                    {stats.acceptanceRate.toFixed(1)}%
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Difficulty Breakdown */}
            <motion.div className="flex flex-col gap-3">
              {difficultyItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className={`flex items-center justify-between p-3 rounded-sm border transition-all duration-300 ${item.color} ${item.borderColor} hover:border-opacity-100`}
                >
                  <span className={`font-mono text-sm ${item.textColor}`}>
                    {item.label}
                  </span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className={`text-lg font-bold ${item.textColor}`}
                  >
                    {item.solved}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>

            {/* View Profile Link */}
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <motion.a
                href="https://leetcode.com/oVinayyy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-4 py-2 text-blue-400 border border-blue-400/50 rounded-sm hover:bg-blue-400/10 transition-colors duration-300"
              >
                View Full Profile →
              </motion.a>
            </motion.div>
          </>
        ) : null}
      </motion.div>
    </div>
  );
};
