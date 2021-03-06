import React from 'react';
import { globals } from '../globals';

export const Header: React.FC = () => (
  <div className="header">
    <a href="/">{globals.siteName}</a>
    <div className="flex-spacer" />
    <a href="https://github.com/gregcousin/bloggy">GitHub</a>
    <a href="/blog/the-ultimate-tech-stack">Motivation</a>
  </div>
);
