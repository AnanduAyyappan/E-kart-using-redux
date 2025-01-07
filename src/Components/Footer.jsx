import React from 'react'
import { Link } from 'react-router-dom'
Link

const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'100px'}} className='mt-5 w-full bg-violet-600 text-white p-4'>
  <div className='flex justify-between p-4'>
<div style={{width:'400px'}} className='intro'>
<div className='text-xl font-bold'><i className='fa-solid fa-truck-fast ms-2 me-2'></i>E Cart</div>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias ratione sed odit a voluptatum eligendi exercitationem voluptatem ducimus, enim ipsa aliquid excepturi voluptate quae maxime illum aliquam corporis et!</p>
  <p>code licenced luminar, docs CC By 3.0</p>
  <p>Currently v5.3.2.</p>
  </div>
  <div className='flex flex-col'>
    <h5 className='text-xl font-bold'>Links</h5>
    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
  </div>
  <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Guides</h5>
          <Link to={''} style={{textDecoration:'none',color:'white'}} target='_blank'>React</Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</Link>
        
        </div>
        <div className='d-flex flex-column'>
          <h5>Contacts</h5>
          <div className='d-flex'>
          <input type='text' placeholder='enter your email here' className='form-control me-2'/>
          <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className='d-flex justify-content-between mt-2 '>
          <Link to={'https://x.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-twitter"></i></Link>
          <Link to={'https://www.instagram.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></Link>
          <Link to={'https://www.linkedin.com/home?originalSubdomain=in'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></Link>
          <Link to={'https://github.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-github"></i></Link>
          <Link to={'https://www.facebook.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></Link>
          <Link to={'https://www.truecaller.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-solid fa-phone"></i></Link>
          </div>
         </div>
         </div>
  </div>
  )
}

export default Footer