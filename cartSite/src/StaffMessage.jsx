import React from 'react'
import './staffMessage.css'

const StaffMessage = () => {
  return (
    <div>
      <div className='staff-msg-heading-containor'> <div className='staff-msg-heading'>Message from <span className='our-staffs' > our staffs</span> </div> <div className='underline-staff-msg'></div></div>   
      <div className='msg-containor'>
        <div className='msg-content ceo-msg-containor'>
          <div className='left-side staff-image-containor left-staff-image-containor'>
            <div className='staff-title'>Message from CEO</div>
            <div className='staff-image-containor'>
              <img src="/Images/Manager image.jpg" alt="CEO Image" className='staff-iamge' />
            </div>
          </div>
          <div className='right-side message-containor'>
            <div className='message'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias corporis, vitae adipisci officia omnis sint tempore culpa in, voluptate, consequuntur obcaecati. Aliquid vitae doloribus esse placeat laborum. Sit, odio incidunt!
            Et eos beatae, corrupti sunt ad quibusdam officiis, illum cupiditate, eaque quam architecto odio voluptates illo tempora eum? Quas quo excepturi incidunt neque! Nihil consequatur totam incidunt quia earum consectetur!
            Quod sint ullam, quasi dolores tempora repellat odio unde laboriosam nulla doloremque totam aliquid soluta labore, hic iusto aspernatur, officiis recusandae! Perspiciatis sunt. <div className='nameofStaff'>Mr.Name</div></div>
          </div>
        </div>
        <div className='msg-content manager-msr-containor' id='manager-msg'>
          <div className='message-containor left-side '>
          <div className='message'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias corporis, vitae adipisci officia omnis sint tempore culpa in, voluptate, consequuntur obcaecati. Aliquid vitae doloribus esse placeat laborum. Sit, odio incidunt!
            Et eos beatae, corrupti sunt ad quibusdam officiis, illum cupiditate, eaque quam architecto odio voluptates illo tempora eum? Quas quo excepturi incidunt neque! Nihil consequatur totam incidunt quia earum consectetur!
            Quod sint ullam, quasi dolores tempora repellat odio unde laboriosam nulla doloremque totam aliquid soluta labore, hic iusto aspernatur, officiis recusandae! Perspiciatis sunt. <div className='nameofStaff'>Mr.Name</div></div></div>
          <div className='staff-image-containor right-side right-staff-image-containor'>
          <div className='staff-title'>Message from Manager</div>
            <div className='staff-image-containor '>
              <img src="/Images/Lady image.jpg" alt="CEO Image" className='staff-iamge' />
            </div>
          </div>
        </div>
        <div className='msg-content cheff-msg-containor'>
          <div className='left-side staff-image-containor left-staff-image-containor' >
          <div className='staff-title'>Message from Chef</div>
            <div className='staff-image-containor '>
              <img src="/Images/Chef image.jpg" alt="CEO Image" className='staff-iamge' />
            </div>
          </div>
          <div className='right-side message-containor'><div className='message'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias corporis, vitae adipisci officia omnis sint tempore culpa in, voluptate, consequuntur obcaecati. Aliquid vitae doloribus esse placeat laborum. Sit, odio incidunt!
            Et eos beatae, corrupti sunt ad quibusdam officiis, illum cupiditate, eaque quam architecto odio voluptates illo tempora eum? Quas quo excepturi incidunt neque! Nihil consequatur totam incidunt quia earum consectetur!
            Quod sint ullam, quasi dolores tempora repellat odio unde laboriosam nulla doloremque totam aliquid soluta labore, hic iusto aspernatur, officiis recusandae! Perspiciatis sunt. <div className='nameofStaff'>Mr.Name</div></div></div>
        </div>
      </div> 
    </div>
  )
}

export default StaffMessage
