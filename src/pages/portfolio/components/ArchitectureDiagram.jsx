import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import { useLanguage } from '../../../components/LanguageContext';

export default function ArchitectureDiagram({ diagramData }) {
  const [selected, setSelected] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const { currentLanguage } = useLanguage();

  if (!diagramData || !diagramData.nodes || !diagramData.links) return null;

  // Responsive node size
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;
  const nodeWidth = isMobile ? 180 : 260;
  const nodeHeight = isMobile ? 70 : 96;

  // Helper to get color classes
  const colorMap = {
    accent: {
      bg: 'bg-accent-50 border-accent-200',
      text: 'text-accent-700',
      ring: 'ring-accent-500',
      arrow: 'text-accent-600',
      icon: 'var(--color-accent-600)'
    },
    secondary: {
      bg: 'bg-secondary-50 border-secondary-200',
      text: 'text-secondary-700',
      ring: 'ring-secondary-500',
      arrow: 'text-secondary-600',
      icon: 'var(--color-secondary-600)'
    },
    success: {
      bg: 'bg-success-50 border-success-200',
      text: 'text-success-700',
      ring: 'ring-success-500',
      arrow: 'text-success-600',
      icon: 'var(--color-success-600)'
    }
  };

  const rem = 16;
  const padding = 40;
  const maxX = Math.max(...diagramData.nodes.map(n => (n.x ?? 0))) + nodeWidth - 3.25 * rem;
  const maxY = Math.max(...diagramData.nodes.map(n => (n.y ?? 0))) + nodeHeight - 3 * rem;

  return (
    <div
      style={{
        overflowX: 'auto',
        width: 'calc(100% + 12rem)',
        marginLeft: diagramData.marginLeft === '0' ? '-1.5rem' : diagramData.marginLeft || 0,
        marginRight: '-12rem',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="relative"
        style={{
          minWidth: maxX + padding * 2,
          boxSizing: 'border-box',
        }}
      >
        <div className="relative" style={{
          width: '100%',
          minWidth: 320,
          height: maxY + padding * 2,
          paddingTop: 0,
          paddingRight: padding,
          paddingBottom: padding,
          display: 'flex',
          alignItems: 'flex-start'
        }}>
          {/* Liens SVG */}
          <svg width={maxX + padding * 2} height={maxY + padding * 2} style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}>
            {/* Rendu des flèches SVG sans label */}
            {diagramData.links.map((link, idx) => {
              const fromNode = diagramData.nodes.find(n => n.id === link.from);
              const toNode = diagramData.nodes.find(n => n.id === link.to);
              if (!fromNode || !toNode) return null;
              const color = colorMap[link.color] || colorMap.accent;
              // Points centraux des blocs (sans padding gauche/haut)
              const fromX = (fromNode.x ?? 0);
              const fromY = (fromNode.y ?? 0);
              const toX = (toNode.x ?? 0);
              const toY = (toNode.y ?? 0);
              // Par défaut : horizontal (droite/gauche)
              let x1 = fromX + nodeWidth;
              let y1 = fromY + nodeHeight / 2;
              let x2 = toX;
              let y2 = toY + nodeHeight / 2;
              // Si blocs alignés verticalement (x proches)
              if (Math.abs((fromX + nodeWidth / 2) - (toX + nodeWidth / 2)) < 40) {
                if (toY + nodeHeight < fromY) {
                  // cible au-dessus
                  x1 = fromX + nodeWidth / 2;
                  y1 = fromY;
                  x2 = toX + nodeWidth / 2;
                  y2 = toY + nodeHeight;
                } else if (toY > fromY + nodeHeight) {
                  // cible en dessous
                  x1 = fromX + nodeWidth / 2;
                  y1 = fromY + nodeHeight;
                  x2 = toX + nodeWidth / 2;
                  y2 = toY;
                }
              }
              // Courbe de bézier pour éviter chevauchement
              const curve = 60;
              let path;
              if (x1 === x2) {
                // Flèche verticale
                path = `M${x1},${y1} C${x1},${y1 + (y2 - y1) / 2} ${x2},${y1 + (y2 - y1) / 2} ${x2},${y2}`;
              } else {
                // Flèche horizontale
                path = `M${x1},${y1} C${x1 + curve},${y1} ${x2 - curve},${y2} ${x2},${y2}`;
              }
              const isActive = hoveredLink === idx || selected === toNode.id;
              return (
                <g key={idx} style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredLink(idx)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => setSelected(toNode.id)}
                >
                  <path
                    d={path}
                    stroke={color.icon}
                    strokeWidth={isActive ? 3 : 1.5}
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    opacity={isActive ? 1 : 0.7}
                    style={{ transition: 'stroke-width 0.2s, opacity 0.2s' }}
                  />
                </g>
              );
            })}
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
                <polygon points="0 0, 8 4, 0 8" fill="#888" />
              </marker>
            </defs>
          </svg>
          {/* Nodes positionnés absolument */}
          {diagramData.nodes.map((node) => {
            const color = colorMap.accent;
            const isActive = selected === node.id || hoveredLink !== null && diagramData.links[hoveredLink]?.to === node.id;
            return (
              <div
                key={node.id}
                className={`cursor-pointer ${color.bg} border-2 rounded-lg p-6 flex flex-col items-center transition-all duration-200 ${isActive ? color.ring : ''}`}
                onClick={() => setSelected(node.id)}
                style={{ position: 'absolute', left: (node.x ?? 0), top: (node.y ?? 0), width: nodeWidth, height: nodeHeight, zIndex: 2 }}
              >
                {/* Logo téléphone à gauche du label pour App Mobile */}
                <div className="flex items-center justify-center gap-2">
                  {node.icon && (
                    <Icon name={node.icon} size={isMobile ? 28 : 36} color={color.icon} />
                  )}
                  <div className={`font-semibold ${color.text} text-center mt-2`}>
                    {typeof node.label === 'object' ? node.label[currentLanguage] : node.label}
                  </div>
                </div>
              </div>
            );
          })}
          {/* Labels HTML des flèches, toujours au-dessus des nodes */}
          {diagramData.links.map((link, idx) => {
            const fromNode = diagramData.nodes.find(n => n.id === link.from);
            const toNode = diagramData.nodes.find(n => n.id === link.to);
            if (!fromNode || !toNode) return null;
            // Points centraux des blocs (sans padding gauche/haut)
            const fromX = (fromNode.x ?? 0);
            const fromY = (fromNode.y ?? 0);
            const toX = (toNode.x ?? 0);
            const toY = (toNode.y ?? 0);
            let x1 = fromX + nodeWidth;
            let y1 = fromY + nodeHeight / 2;
            let x2 = toX;
            let y2 = toY + nodeHeight / 2;
            if (Math.abs((fromX + nodeWidth / 2) - (toX + nodeWidth / 2)) < 40) {
              if (toY + nodeHeight < fromY) {
                x1 = fromX + nodeWidth / 2;
                y1 = fromY;
                x2 = toX + nodeWidth / 2;
                y2 = toY + nodeHeight;
              } else if (toY > fromY + nodeHeight) {
                x1 = fromX + nodeWidth / 2;
                y1 = fromY + nodeHeight;
                x2 = toX + nodeWidth / 2;
                y2 = toY;
              }
            }
            // Position du label : au centre de la courbe
            let labelX = (x1 + x2) / 2;
            let labelY = (y1 + y2) / 2;
            if (x1 === x2) {
              // rien
            } else {
              if (y2 < y1) {
                labelY -= 22;
              } else if (y2 > y1) {
                labelY += 22;
              } else {
                labelY -= 22;
              }
            }
            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: labelX - 50,
                  top: labelY - 10,
                  width: 100,
                  height: 20,
                  background: 'rgba(255,255,255,0.85)',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  zIndex: 20,
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#222', // noir
                }}
              >
                {link.label?.[currentLanguage] || link.label}
              </div>
            );
          })}
        </div>
        {/* Description dynamique */}
        <div className="min-h-[48px] text-center text-text-secondary text-base">
          {selected
            ? (diagramData.nodes.find((n) => n.id === selected)?.description?.[currentLanguage] || diagramData.nodes.find((n) => n.id === selected)?.description)
            : (currentLanguage === 'fr' ? 'Cliquez sur un composant pour afficher sa description.' : 'Click a component to see its description.')}
        </div>
      </div>
    </div>
  );
} 