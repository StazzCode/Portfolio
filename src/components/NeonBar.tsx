export const NeonBar = () => {
    const redbackblurbarStyle = {
        borderBottom: '7.5px solid #480A0A',
        filter: 'blur(5px)',
    };
    const redbackbarStyle = {
        borderBottom: '3.75px solid #480A0A',
    };
    const yellowbackblurbarStyle = {
        borderBottom: '7.5px solid #EA3E03',
        filter: 'blur(5px)',
    };
    const yellowbackbarStyle = {
        borderBottom: '3.75px solid #EA3E03',
    };
    const greenbackblurbarStyle = {
        borderBottom: '7.5px solid #1FA045',
        filter: 'blur(5px)',
    };
    const greenbackbarStyle = {
        borderBottom: '3.75px solid #1FA045',
    };
    const bluebackblurbarStyle = {
        borderBottom: '7.5px solid #233EEF',
        filter: 'blur(5px)',
    };
    const bluebackbarStyle = {
        borderBottom: '3.75px solid #233EEF',
    };
    const minmargin = {
        marginBottom: '0.5px',
    }
  return (
    <>
      <section className='flex flex-col h-5 text-transparent w-full'>
        <div className='relative h-1/3 w-full' style={minmargin}>
          <div className="redbackblurbar relative h-3/4 bg-[#480A0A]" style={{ ...redbackblurbarStyle, width: '100%' }}>Neon</div>
          <div className="redbackbar w-full h-1.5 top-0 absolute bg-[#480A0A]" style={{ ...redbackbarStyle, width: '100%' }}>Neon</div>
          <div className="bar w-full h-3/4 bottom-1/4 absolute bg-[#F80E1B]">Neon</div>
        </div>
        <div className='relative h-1/3 w-full' style={minmargin}>
          <div className="redbackblurbar relative h-3/4 bg-[#EA3E03]" style={{ ...yellowbackblurbarStyle, width: '100%' }}>Neon</div>
          <div className="redbackbar w-full h-1.5 top-0 absolute bg-[#EA3E03]" style={{ ...yellowbackbarStyle, width: '100%' }}>Neon</div>
          <div className="bar w-full h-3/4 bottom-1/4 absolute bg-[#F8C514]">Neon</div>
        </div>
        <div className='relative h-1/3 w-full' style={minmargin}>
          <div className="redbackblurbar relative h-3/4 bg-[#1FA045]" style={{ ...greenbackblurbarStyle, width: '100%' }}>Neon</div>
          <div className="redbackbar w-full h-1.5 top-0 absolute bg-[#1FA045]" style={{ ...greenbackbarStyle, width: '100%' }}>Neon</div>
          <div className="bar w-full h-3/4 bottom-1/4 absolute bg-[#3DED83]">Neon</div>
        </div>
        <div className='relative h-1/3 w-full'>
          <div className="redbackblurbar relative h-3/4 bg-[#233EEF]" style={{ ...bluebackblurbarStyle, width: '100%' }}>Neon</div>
          <div className="redbackbar w-full h-1.5 top-0 absolute bg-[#233EEF]" style={{ ...bluebackbarStyle, width: '100%' }}>Neon</div>
          <div className="bar w-full h-3/4 bottom-1/4 absolute bg-[#86F4EE]">Neon</div>
        </div>
      </section>
    </>
    
  )
}
