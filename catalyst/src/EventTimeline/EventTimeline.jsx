import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUsers, FiHelpCircle, FiFileText, FiPlayCircle, FiMic } from 'react-icons/fi';
import './EventTimeline.css';

const events = [
  {
    id: 'reg',
    title: 'Registrations',
    dateLabel: 'Deadline — 17 Aug',
    icon: <FiUsers />,
    note: 'Registration closes at 11:59 PM',
    status: 'upcoming',
  },
  {
    id: 'internal-meet',
    title: 'Internal Meeting',
    dateLabel: '19 / 20 / 21 Aug',
    icon: <FiCalendar />,
    note: 'Team sync — pick a slot',
    status: 'upcoming',
  },
  {
    id: 'mentorship',
    title: 'Mentorship / Doubt Session',
    dateLabel: '19 / 20 / 21 Aug',
    icon: <FiHelpCircle />,
    note: 'Mentor support — optional but recommended',
    status: 'upcoming',
  },
  {
    id: 'review',
    title: 'PPT Review & Shortlisting',
    dateLabel: '22 Aug',
    icon: <FiFileText />,
    note: 'Shortlist announced via email',
    status: 'upcoming',
  },
  {
    id: 'rehearsal',
    title: 'Rehearsals',
    dateLabel: '23 / 24 Aug',
    icon: <FiPlayCircle />,
    note: 'Final dry run — mandatory',
    status: 'upcoming',
  },
  {
    id: 'dday',
    title: 'D‑Day',
    dateLabel: '25 Aug (Evening)',
    icon: <FiMic />,
    note: '2 min pitch, 3 min Q&A',
    status: 'upcoming',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: 'tween', ease: 'easeOut', duration: 0.7 } }
};

function TimelineItem({ item, isLast }) {
  return (
    <motion.li
      className="et-item"
      aria-label={`${item.title} on ${item.dateLabel}`}
      variants={itemVariants}
    >
      <div className="et-node" aria-hidden="true" />
      {!isLast && <div className="et-spine" aria-hidden="true" />}
      <div className="et-card">
        <div className="et-card-head">
          <span className={`et-icon et-status-${item.status}`}>{item.icon}</span>
          <h3 className="et-title">{item.title}</h3>
          <span className="et-date">{item.dateLabel}</span>
        </div>
        {item.note && <p className="et-note">{item.note}</p>}
      </div>
    </motion.li>
  );
}

export default function EventTimeline() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25, delayChildren: 0.2 } }
  };
  return (
    <section id="timeline" className="event-timeline" aria-label="Event Timeline">
      <header className="et-header">
        <h2>Event Timeline</h2>
        <p className="et-sub">All key milestones at a glance</p>
      </header>
      <motion.ol
        className="et-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {events.map((e, idx) => (
          <TimelineItem key={e.id} item={e} isLast={idx === events.length - 1} />)
        )}
      </motion.ol>
    </section>
  );
}
