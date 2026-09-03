// @ts-nocheck
import React from "react";
import "./GitDiffStat.scss";

/**
 * A small GitHub-style diffstat badge: green "+additions", red "-deletions",
 * and a 5-square bar colored proportionally (green = additions, red = deletions).
 */
export default function GitDiffStat({additions = 0, deletions = 0, blocks = 5}) {
  const total = additions + deletions;

  // Proportionally allocate the bar's squares, keeping at least one colored
  // square for any non-zero side so the ratio always reads clearly.
  let greenBlocks = 0;
  let redBlocks = 0;
  if (total > 0) {
    greenBlocks = Math.round((additions / total) * blocks);
    if (additions > 0 && greenBlocks === 0) {
      greenBlocks = 1;
    }
    if (additions > 0 && greenBlocks === blocks && deletions > 0) {
      greenBlocks = blocks - 1;
    }
    redBlocks = deletions > 0 ? blocks - greenBlocks : 0;
  }
  const neutralBlocks = blocks - greenBlocks - redBlocks;

  const bar = [];
  for (let i = 0; i < greenBlocks; i++) {
    bar.push(<span key={`add-${i}`} className="git-diffstat__block git-diffstat__block--add" />);
  }
  for (let i = 0; i < redBlocks; i++) {
    bar.push(<span key={`del-${i}`} className="git-diffstat__block git-diffstat__block--del" />);
  }
  for (let i = 0; i < neutralBlocks; i++) {
    bar.push(<span key={`neu-${i}`} className="git-diffstat__block git-diffstat__block--neutral" />);
  }

  return (
    <span
      className="git-diffstat"
      role="img"
      aria-label={`${additions} additions and ${deletions} deletions`}
    >
      <span className="git-diffstat__add">+{additions}</span>
      <span className="git-diffstat__del">&minus;{deletions}</span>
      <span className="git-diffstat__bar" aria-hidden="true">
        {bar}
      </span>
    </span>
  );
}
