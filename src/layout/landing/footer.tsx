import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { SlSocialInstagram } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const LandingFooter = () => {
  const socials = [<SlSocialInstagram/>, <FaLinkedinIn/>, <FaFacebookF/>, <FaXTwitter/>]
  const routes = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "About Us",
      route: "/about"
    },
    {
      name: "Webinars",
      route: "/webinars"
    },
    {
      name: "Resources",
      route: "/"
    },
    {
      name: "Careers",
      route: "/"
    },
    {
      name: "Terms & Conditions",
      route: "/terms"
    },
    {
      name: "Help",
      route: "/terms"
    },
    {
      name: "Privacy Policy",
      route: "/privacy"
    },
    {
      name: "Contact Us",
      route: "/contact"
    },
    {
      name: "License",
      route: "/privacy"
    },
    {
      name: "Certifications",
      route: "/"
    },
    {
      name: "Partnership",
      route: "/"
    },
    {
      name: "Membership",
      route: "/"
    },
  ]
  return (
    <div className="">
      <div className="bg-[#1C1C1C] bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1716824348/chlps/Group_48097540_xi8o5t.png)] bg-cover">
        <div className="py-12 lg:pt-16">
          <div className="box text-white">
            <div className='lg:flex border-b border-[#4B4B4B] pb-12 justify-between items-center'>
              <p className='fw-600 text-xl lg:text-3xl'>Sign Up to Our Newsletter</p>
              <div className='bg-white p-2 flex rounded-[10px] px-3 mt-5 lg:mt-0 lg:w-4/12'>
                <input type="email" placeholder='your email address' className='p-2 border-none outline-none w-full text-black'/>
                <button className='bg-[#260791] shrink-0 fw-500 px-6 py-2 rounded-[10px]'>Submit</button>
              </div>
            </div>
            <div className='border-b border-[#4B4B4B] py-12 justify-between items-center'>
              <div className='grid gap-y-5 grid-cols-2 lg:grid-cols-4'>
                <div>
                  <p className='fw-500'>Quick Links</p>
                  <div className='mt-3'>
                    <ul className='grid gap-3'>
                      {routes.slice(0,5).map((item) => (
                        <li className='' key={item.name}>
                          <Link to={'/'}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <p className='fw-500'>Support</p>
                  <div className='mt-3'>
                    <ul className='grid gap-3'>
                      {routes.slice(5,9).map((item) => (
                        <li className='' key={item.name}>
                          <Link to={'/'}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <p className='fw-500'>Legal</p>
                  <div className='mt-3'>
                    <ul className='grid gap-3'>
                      {routes.slice(9).map((item) => (
                        <li className='' key={item.name}>
                          <Link to={'/'}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <p className='fw-500'>Contact Info</p>
                  <div className='mt-3'>
                    <p>Dougall Avenue, Windsor, Ontario N9E 1S3 Canada</p>
                    <p className='mt-3'>+1 905-452-2470</p>
                    <p className='mt-3'>info@chlpscanada.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pb-12 box'>
         <div className='lg:flex justify-between'>
         <p className='text-center text-white fs-400'>© Copyright. All Rights Reserved. Association of Chatered Loss Prevention Specialists of Canada</p>
         <div>
         <ul className='flex justify-center gap-x-6 mt-4 lg:mt-0'>
                {
                  socials.map((item, i) => (
                    <div className='w-6 h-6 text-white place-center border border-white cursor-pointer circle p-[6px]' key={i} >
                      {item}
                    </div>
                  ) )
                }
              </ul>
         </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default LandingFooter