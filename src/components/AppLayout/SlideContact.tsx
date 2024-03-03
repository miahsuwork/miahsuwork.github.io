import Image from 'next/image';

export default function SlideContact() {
  const fixedCenterClass =
    'flex flex-col fixed items-center top-1/2 -translate-y-1/2 mx-5 z-30';
  return (
    <>
      <div className={`${fixedCenterClass} left-0 hidden`}>
        <div className='[writing-mode:vertical-lr]'>Contact</div>
        <div className='h-[120px] my-3 border-l border-black rounded'></div>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/images/icon-mail.png'
          width={39}
          height={39}
          alt='contact'
          priority
        />
      </div>
      <div className={`${fixedCenterClass} right-0 hidden`}>
        <div className='[writing-mode:vertical-lr]'>SNS</div>
        <div className='h-[120px] my-3 border-l border-black rounded'></div>
        <div className='flex flex-col space-y-4'>
          <button>
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/images/icon-mail.png'
              width={39}
              height={39}
              alt='contact'
              priority
            />
          </button>
          <button>
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/images/icon-mail.png'
              width={39}
              height={39}
              alt='contact'
              priority
            />
          </button>
          <button>
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/images/icon-mail.png'
              width={39}
              height={39}
              alt='contact'
              priority
            />
          </button>
        </div>
      </div>
      <div className='fixed m-5 right-0 bottom-0 hidden'>
        <button>goTop</button>
      </div>
    </>
  );
}
