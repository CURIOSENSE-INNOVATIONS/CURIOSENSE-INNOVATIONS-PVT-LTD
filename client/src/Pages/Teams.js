import React from 'react'
import TeamCard from '../Components/TeamCard'
import Team1 from "../Images/Teams/Team1.jpeg"
import Team2 from "../Images/Teams/Team2.jpeg"
import Team3 from "../Images/Teams/Team3.jpeg"
import Team4 from "../Images/Teams/Team4.jpeg"

const Teams = () => {

  const teamMembers = [
    {
      name: 'Darshan Reddy G',
      role: 'Managing Director',
      image: `${Team1}`,
      bio: 'Darshan Reddy G, a proficient MBA graduate, guides the company to triumph by seamlessly blending expertise in marketing, finance, supply chain, and innovation. His visionary leadership catalyzes strategic growth initiatives and ensures organizational excellence.',
    },
    {
      name: 'Dr Muthukumar Chockalingam',
      role: 'Director, R&D',
      image: `${Team2}`,
      bio: 'Dr. Muthukumar Chockalingam, R&D Director at a startup, spearheads cutting-edge research in healthcare, diagnostics, learning, mental health, and sensor technology, pioneering innovations at the intersection of technology and well-being.',
    },
    {
      name: 'Krishna Raju R',
      role: 'CTO',
      image: `${Team3}`,
      bio: 'Krishna Raju R, CTO, excels in product design, hardware development, and robotics. A mechatronics engineer, proficient in 3D printing, CAD, and effective project management, contributing to innovative solutions at the intersection of technology and engineering.',
    },
    {
      name: 'Rakesh Kumar',
      role: 'Software Engineer',
      image: `${Team4}`,
      bio: 'Rakesh Kumar, SDE, a computer science engineer and professional web developer, combines technical expertise with creativity to craft dynamic and efficient websites. His skills contribute to seamless digital experiences, reflecting a passion for innovation.',
    },
    // Add more team members as needed
  ];

  return (
    <>
      <div className="title">Meet Our Team</div>
      <div className="app">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} {...member} />
      ))}
    </div>
    </>
  )
}

export default Teams