import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black  text-white'>
        <div className='w-full h-full flex flex-col justify-center px-4 max-w-screen-lg mx-auto'>
            <div className='pb-8'>
                <p className='inline font-bold text-4xl border-b-4 border-gray-400'>About</p>
            </div>
            <p className='text-xl mat-20'>
            Hello, my name is Prudhvi Reddy, and I'm currently a CSE student at Neil Gogte Institute of Technology. I am passionate about programming, software development, and technology in general. I am stoked to work and learn new technologies and enrich my skills by working with professionals in the industry.

            </p>
            <br />
            <p className='text-xl'>
                Some of the projects which i have worked on are  : 
                <h3 className='font-extrabold'>Trash Detection and Reporting using Yolov5, ServiceNow and Drone Kit</h3>
                <p>• Aerial Images taken using a drone will be inferred via a customyolov5 model which was trained on images of trash.</p>
                <p>• If the number of detections are more than a set threshold an alert is sent to the authorities in the form of an Incident in ServiceNow.</p>
                <p>• The inferred images are also stored in Amazon S3 with a reference of them in the database for reference.</p>
                <p>• The images corresponding to a given flight can be viewed via our Web Client.</p>
                <h3 className='font-extrabold'>Connect-4 using JS, HTML and CSS</h3>
                <p>• Simple Connect 4 game that can be played by 2 players online.</p>
                <p>• All the features have been implement using pure vanilla JS, HTML and CSS.</p>
                <h3 className='font-extrabold'>Website to Fetch Movie Details</h3>
                <p>• A website created using to give user all the required information about a particular movie.</p>
                <p>• This accepts the movie name form the user and fetches the details using an API and displays it to the user.</p>

            </p>
        </div>
    </div>
  )
}

export default About