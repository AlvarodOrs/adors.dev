export type ProjectMeta = {
  slug: string
  title: string
  description: string
  status: 'in-progress' | 'complete'
  tags: string[]
  date: string
}

export type Project = {
  meta: ProjectMeta
  content: string
}

const projects: Project[] = [
  {
    meta: {
      slug: 'bayesian-financial-forecasting',
      title: 'Bayesian Neural Networks for Financial Forecasting',
      description:
        'Research-oriented implementation of Bayesian Neural Networks for uncertainty-aware prediction on financial time-series data.',
      status: 'in-progress',
      tags: [
        'python',
        'pytorch',
        'bayesian-inference',
        'machine-learning',
        'finance',
        'time-series',
      ],
      date: '2025-05-01',
    },
    content: `
## Overview

TFG project focused on implementing Bayesian Neural Networks (BNNs) for probabilistic prediction in financial contexts using PyTorch.

The project explores uncertainty-aware forecasting on noisy financial time-series data through variational inference and Monte Carlo-based approximation methods. The objective is not only predictive accuracy, but also reliable uncertainty estimation and calibration.

## Scope

- **Probabilistic modeling** — Bayesian neural network architectures for predictive distributions instead of point estimates
- **Inference methods** — variational inference and Monte Carlo Dropout for posterior approximation
- **Financial time-series processing** — preprocessing, feature engineering, normalization, and train-validation-test splitting
- **Uncertainty evaluation** — confidence intervals, calibration analysis, prediction intervals, and uncertainty decomposition
- **Model evaluation** — RMSE, MAE, calibration metrics, coverage probability, and robustness under noisy conditions

## Current Focus

- Building baseline Bayesian MLP architectures in PyTorch
- Implementing stochastic forward passes for uncertainty estimation
- Evaluating calibration quality on public market datasets

## Status

In progress. Research and implementation are ongoing.
    `.trim(),
  },
]

export function getAllProjects(): ProjectMeta[] {
  return projects
    .map((p) => p.meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getProject(slug: string): Project {
  const project = projects.find((p) => p.meta.slug === slug)
  if (!project) throw new Error(`Project not found: ${slug}`)
  return project
}