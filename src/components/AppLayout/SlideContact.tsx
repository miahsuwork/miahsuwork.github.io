import clsx from 'clsx';
import Image from 'next/image';

export default function SlideContact() {
  return (
    <>
      <div className={clsx('slide-contact', 'slide-contact--left')}>
        <div className='slide-contact__label'>Contact</div>
        <div className='slide-contact__divider'></div>
        <Image
          className='slide-contact__icon'
          src='/images/icon-mail.png'
          width={39}
          height={39}
          alt='contact'
          priority
        />
      </div>
      <div className={clsx('slide-contact', 'slide-contact--right')}>
        <div className='slide-contact__label'>SNS</div>
        <div className='slide-contact__divider'></div>
        <div className='slide-contact__icons'>
          <button>
            <Image
              className='slide-contact__icon'
              src='/images/icon-mail.png'
              width={39}
              height={39}
              alt='contact'
              priority
            />
          </button>
          <button>
            <Image
              className='slide-contact__icon'
              src='/images/icon-mail.png'
              width={39}
              height={39}
              alt='contact'
              priority
            />
          </button>
          <button>
            <Image
              className='slide-contact__icon'
              src='/images/icon-mail.png'
              width={39}
              height={39}
              alt='contact'
              priority
            />
          </button>
        </div>
      </div>
      <div className='slide-contact__go-top'>
        <button>goTop</button>
      </div>
    </>
  );
}
