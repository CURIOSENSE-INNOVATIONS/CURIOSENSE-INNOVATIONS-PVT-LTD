import React from 'react'
import TeamCard from '../Components/TeamCard'
import Dev from "../Images/testimage.jpeg"

const Teams = () => {

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Developer',
      image: `${Dev}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'John Doe',
      role: 'Developer',
      image: `${Dev}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'John Doe',
      role: 'Developer',
      image: `${Dev}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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