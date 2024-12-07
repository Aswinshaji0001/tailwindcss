import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from '../public/a.jpeg'
import img1 from '../public/1.jpg';
import img2 from '../public/2.jpg';
import img3 from '../public/3.jpg';
import img4 from '../public/4.jpg';
import New from './New'


function App() {
  return (
    <>
      {/* <div className='flex flex-row'>
      <div className='basis-1/2'>1</div>
      <div className='basis-1/2'>2</div>
      <div className='basis-1/2'>3</div>
      <div className='basis-1/2'>4</div>
      <div className='basis-1/2'>5</div>
      <div className='basis-1'>6</div>

      </div>

      <div className=' border border-indigo-600 hover:border-t-4 text-center'>Rounded</div>
      <p className='font-mono-bold text-5xl text-center text-red-600/75 hover:text-blue-600/100'>FELIX</p>
      <p className='font-mono-bold text-2xl text-blue-600/75 hover:text-yellow-600/100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae cupiditate necessitatibus ab natus atque nemo nihil neque voluptates facilis. Pariatur impedit accusamus alias illum ullam placeat ratione autem eos? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse placeat commodi, asperiores soluta incidunt illo facilis cum repellat odit! Iusto eligendi maiores sit cumque repudiandae voluptates pariatur sed commodi</p>
      <h1 className='font-thin text-center text-2xl'>HEY FELIX</h1>
      <ul className='list-inside list-style-type: disc; text-center'>
        <h1 className='text-3xl'>WHO IS FELIX ?</h1>
        <li >Felix is a <a href="" className='underline decoration-sky-500'>cinephile</a></li>
        <li><a href="" className='underline decoration-pink-500'>Twitter</a> Lover</li>
        <li>Developer</li>
      </ul>
      <div className='bg-fixed text-center basis-1 m-auto hover:grayscale-0' style={{ backgroundImage: `url(${img1})`,width:'500px',backgroundRepeat:'no-repeat'}}>HAI THERE
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium error repudiandae provident quia natus ex ullam sint dolor, necessitatibus sequi fugiat minima neque sit deserunt alias temporibus repellendus consequatur optio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ducimus aperiam doloribus nam est, quae, officiis quas error minima repellendus aut, ex tenetur tempora. Facilis expedita doloremque unde alias vel.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis laborum, est tempora perspiciatis odio beatae ab porro temporibus ipsum quis fuga neque! Eveniet, esse. Consequatur itaque tenetur sit neque!Lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium ipsum ad! Totam, fugiat? Consequatur blanditiis laudantium dolore libero. Ullam, voluptatibus excepturi assumenda sint dolore id pariatur fugiat eius alias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam eligendi totam nulla autem corporis voluptate libero ullam, suscipit explicabo amet quo perspiciatis veritatis non. Animi nostrum voluptates atqueLorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam quos ab natus repudiandae officiis enim similique fugiat exercitationem labore commodi, inventore ullam, excepturi dolorem praesentium? Inventore dolorum eum
      </div>
      <div className='bg-fixed text-center  basis-1 m-auto' style={{ backgroundImage: `url(${img2})`,width:'500px'}}>HAI THERE
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium error repudiandae provident quia natus ex ullam sint dolor, necessitatibus sequi fugiat minima neque sit deserunt alias temporibus repellendus consequatur optio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ducimus aperiam doloribus nam est, quae, officiis quas error minima repellendus aut, ex tenetur tempora. Facilis expedita doloremque unde alias vel.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis laborum, est tempora perspiciatis odio beatae ab porro temporibus ipsum quis fuga neque! Eveniet, esse. Consequatur itaque tenetur sit neque!Lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium ipsum ad! Totam, fugiat? Consequatur blanditiis laudantium dolore libero. Ullam, voluptatibus excepturi assumenda sint dolore id pariatur fugiat eius alias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam eligendi totam nulla autem corporis voluptate libero ullam, suscipit explicabo amet quo perspiciatis veritatis non. Animi nostrum voluptates atqueLorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam quos ab natus repudiandae officiis enim similique fugiat exercitationem labore commodi, inventore ullam, excepturi dolorem praesentium? Inventore dolorum eum
      </div>
      <div className='bg-fixed text-center  basis-1 m-auto' style={{ backgroundImage: `url(${img3})`,width:'500px'}}>HAI THERE
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium error repudiandae provident quia natus ex ullam sint dolor, necessitatibus sequi fugiat minima neque sit deserunt alias temporibus repellendus consequatur optio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ducimus aperiam doloribus nam est, quae, officiis quas error minima repellendus aut, ex tenetur tempora. Facilis expedita doloremque unde alias vel.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis laborum, est tempora perspiciatis odio beatae ab porro temporibus ipsum quis fuga neque! Eveniet, esse. Consequatur itaque tenetur sit neque!Lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium ipsum ad! Totam, fugiat? Consequatur blanditiis laudantium dolore libero. Ullam, voluptatibus excepturi assumenda sint dolore id pariatur fugiat eius alias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam eligendi totam nulla autem corporis voluptate libero ullam, suscipit explicabo amet quo perspiciatis veritatis non. Animi nostrum voluptates atqueLorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam quos ab natus repudiandae officiis enim similique fugiat exercitationem labore commodi, inventore ullam, excepturi dolorem praesentium? Inventore dolorum eum
      </div>
      <div className='bg-fixed text-center  basis-1 m-auto' style={{ backgroundImage: `url(${img4})`,width:'500px'}}>HAI THERE
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium error repudiandae provident quia natus ex ullam sint dolor, necessitatibus sequi fugiat minima neque sit deserunt alias temporibus repellendus consequatur optio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ducimus aperiam doloribus nam est, quae, officiis quas error minima repellendus aut, ex tenetur tempora. Facilis expedita doloremque unde alias vel.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis laborum, est tempora perspiciatis odio beatae ab porro temporibus ipsum quis fuga neque! Eveniet, esse. Consequatur itaque tenetur sit neque!Lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium ipsum ad! Totam, fugiat? Consequatur blanditiis laudantium dolore libero. Ullam, voluptatibus excepturi assumenda sint dolore id pariatur fugiat eius alias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam eligendi totam nulla autem corporis voluptate libero ullam, suscipit explicabo amet quo perspiciatis veritatis non. Animi nostrum voluptates atqueLorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam quos ab natus repudiandae officiis enim similique fugiat exercitationem labore commodi, inventore ullam, excepturi dolorem praesentium? Inventore dolorum eum
      </div>
      <div className='text-center m-auto hover:transition-all'>
      <table className='border-separate border-spacing-2 border border-slate-500 m-auto'>
        <thead>
          <tr>
          <th className="border border-slate-600 ...">Features</th>
          <th className="border border-slate-600 ...">Problems</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700 ...">Intelligent</td>
            <td className="border border-slate-700 ...">Honesty</td>
          </tr>
          <tr>
            <td className="border border-slate-700 ...">Brave</td>
            <td className="border border-slate-700 ...">not Brave</td>
          </tr>
        </tbody>
      </table>
      <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-500,border rounded m-5 p-5">
              Save Changes
      </button>
      </div>
      <div className='bg-fixed basis-1 m-auto bg-center' style={{ backgroundImage: `url(${img3})`,width:'100%',height:'50vh',backgroundRepeat:'no-repeat',objectFit:'cover'}}>
      <input type="checkbox" class="accent-pink-500"/> Customized <br></br>
                  <button type="button" class="cursor-progress bg-blue-500 p-5 m-auto">
                  Saving...
            </button>
      </div> */}
    <New></New>
      </>
  )
}

export default App
