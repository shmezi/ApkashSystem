# 🗓️ apkash

# 🧑‍💻 Developed by Ezra Golombek 2025
**apkash** is a scheduling application focused on **automatically generating fair weekly duty schedules** for organizations.

At its current stage, apkash is a **schedule-generation engine** with a UI.  
User authentication and personal accounts are planned for the future but are **not implemented yet**.

Built with **TypeScript**, **Next.js**, **Material UI (MUI)**, and **MongoDB**.

---

## ✨ Current Features

- 🔄 **Automatic Weekly Schedule Generation**  
  Generates weekly duty schedules with no manual assignment.

- ⚖️ **Fairness-Driven Scheduling**  
  Uses historical data to evenly distribute duties over time.

- 📅 **History-Aware Assignments**  
  Prevents repeated or uneven schedules across weeks.

- 🧠 **Deterministic Logic**  
  Identical inputs produce identical schedules, ensuring transparency.

---

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **UI:** React
- **Design System:** Material UI (MUI)
- **Database:** MongoDB
- **ODM:** Mongoose
- **Backend:** Next.js API Routes / Server Actions

---

## 🧠 Scheduling Philosophy

apkash generates schedules based on:

- Total number of past assignments
- Time since last assignment
- Weekly rotation constraints
- Long-term fairness across all users

The goal is to remove bias, reduce manual work, and keep scheduling consistent.

---