# DRAFT App - Global Project Context

## Project Overview

DRAFT is a mobile application focused on nightlife, pubs, and young audiences.

The platform connects users with pubs in real time, allowing them to:
- discover nearby pubs,
- see the current music and atmosphere,
- access promotions,
- earn rewards through a loyalty system.

The core business idea is to increase customer retention and average consumption in pubs through gamification and rewards.

The project is mainly frontend-focused with minimal backend complexity.

---

# Main Objectives

## User Objectives
- Discover pubs nearby
- Know the current music and vibe before going
- Earn rewards and free drinks through consumptions
- Explore nightlife socially and visually

## Business Objectives
- Increase customer recurrence
- Increase average drink consumption
- Provide pubs with customer analytics
- Offer a SaaS loyalty solution for nightlife businesses

---

# Technical Philosophy

The project prioritizes:
- strong UI/UX,
- modern animations,
- responsive mobile experience,
- simple backend architecture.

Backend complexity should remain minimal.

---

# Target Audience

## Primary Audience
Young adults between 18-30 years old interested in:
- DRAFT,
- music,
- pubs,
- social experiences,
- rewards and promotions.

## Secondary Audience
Pub and nightlife business owners.

---

# Core Features

## 1. Authentication
Users can:
- sign up,
- log in,
- manage profile.

Authentication providers:
- Google
- Apple
- Email

---

## 2. Pub Discovery

Users can:
- browse pubs,
- filter by music or atmosphere,
- view nearby locations,
- see live music information,
- see promotions.

---

## 3. Real-Time Atmosphere

Each pub can update:
- current music genre,
- DJ or playlist,
- crowd level,
- active promotions.

Examples:
- Reggaeton
- Techno
- House
- Indie
- Full / Moderate / Empty

---

## 4. Loyalty & QR Reward System

Users can generate a QR code after purchasing a drink.

Pub staff scan the QR code to:
- validate the purchase,
- add points to the user account.

Users can redeem rewards when reaching thresholds defined by the establishment.

Examples:
- Free drink
- Discount
- VIP access
- Free shot

---

## 5. Gamification

The application should encourage recurring usage through:
- levels,
- badges,
- streaks,
- friend rankings,
- achievement systems.

Examples:
- Bronze / Silver / Gold
- Techno Fan
- Weekend King
- Explorer

---

## 6. Pub Dashboard

Pub owners can:
- manage rewards,
- update current music,
- update crowd status,
- view customer analytics.

---

# Recommended Tech Stack

## Frontend
- React Native with Expo

## Backend
- Firebase

Firebase services:
- Authentication
- Firestore
- Storage

---

# Design Guidelines

## Visual Style
The application should have:
- dark theme,
- neon DRAFT aesthetic,
- modern card-based UI,
- smooth animations,
- social app feeling.

Inspirations:
- Spotify
- Instagram
- BeReal

---

# UX Principles

The app should feel:
- fast,
- modern,
- social,
- visually immersive.

Avoid:
- overloaded screens,
- excessive text,
- complex flows.

Prioritize:
- quick interactions,
- visual discovery,
- animations,
- simple navigation.

---

# Main Screens

## Home Screen
- nearby pubs,
- live atmosphere,
- promotions,
- featured places.

## Pub Screen
- pub information,
- current music,
- gallery,
- rewards,
- QR generation.

## Map Screen
- interactive map,
- pub markers,
- live status.

## Profile Screen
- user stats,
- points,
- rewards,
- achievements.

## Rewards Screen
- available rewards,
- progress bars,
- redeemed rewards.

---

# Architecture Guidelines

## Frontend Structure

src/
├── components/
├── screens/
├── navigation/
├── services/
├── hooks/
├── constants/
├── assets/
└── theme/

---

# Backend Guidelines

Backend should remain lightweight.

Main collections:
- users
- pubs
- rewards
- scans
- achievements

Avoid:
- complex servers,
- heavy business logic,
- custom backend unless necessary.

---

# QR System Philosophy

The QR system should be:
- simple,
- fast,
- temporary,
- secure enough for demo purposes.

Possible implementation:
- temporary token,
- single-use validation,
- timestamp verification.

---

# Scalability Vision

Initial city:
- Granada

Future expansion:
- Málaga
- Sevilla
- Madrid
- Barcelona

The business model is designed as a scalable SaaS platform for DRAFT businesses.

---

# Business Model

Monthly subscription for pubs.

Possible tiers:
- Basic
- Premium

Revenue drivers:
- customer retention,
- increased average spending,
- DRAFT analytics,
- promotions.

---

# Project Priorities

Priority order:
1. UI/UX quality
2. Smooth demo experience
3. Clear business value
4. Gamification
5. Minimal but functional backend

---

# Non-Goals

The project does NOT aim to:
- build a complex social network,
- create a large-scale backend,
- implement advanced AI systems,
- support large-scale production infrastructure.

This is an MVP-oriented university project.

---

# Development Philosophy

Focus on:
- rapid iteration,
- visually impressive demos,
- modular components,
- clean architecture,
- maintainable code.

Avoid overengineering.