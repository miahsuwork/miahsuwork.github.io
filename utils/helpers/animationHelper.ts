import gsap from 'gsap';

const toDecimal = (number: number, digit: number) => {
  return Math.round(number * Math.pow(10, digit)) / Math.pow(10, digit);
};

export const strengthPosition = (
  e: MouseEvent,
  rectPosX: number,
  rectPosY: number,
  winW: number,
  winH: number
) => {
  const x = (e.clientX * 2 - winW) / winW;
  const y = (e.clientY * 2 - winH) / winH;
  let strengthX = x - rectPosX;
  let strengthY = y - rectPosY;
  strengthX = toDecimal(strengthX, 2) * -1;
  strengthY = toDecimal(strengthY, 2) * -1;
  return { strengthX, strengthY };
};

export const rectPosition = (
  element: HTMLElement,
  winW: number,
  winH: number
) => {
  const rectW = element.clientWidth;
  const rectH = element.clientHeight;
  const orgPos = element.getBoundingClientRect();
  const rectL = orgPos.left + rectW / 2;
  const rectT = orgPos.top + rectH / 2;
  let rectPosX = (rectL * 4 - winW) / winW;
  let rectPosY = (rectT * 4 - winH) / winH;

  rectPosX = toDecimal(rectPosX, 2);
  rectPosY = toDecimal(rectPosY, 2);
  return { rectPosX, rectPosY, rectPosZ: 5 };
};

export class imgMouseAni {
  isScale = true;
  constructor(canScale = true) {
    this.isScale = canScale;
  }

  setShadow = (element: HTMLDivElement) => {
    gsap.set(element, {
      boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.15)',
    });
  };

  onMouseEnter = (e: MouseEvent) => {
    gsap.to(e.target, {
      scale: this.isScale ? 1.05 : 1,
      boxShadow: this.isScale
        ? '16px 24px 40px rgba(0, 0, 0, 0.20)'
        : '8px 8px 20px rgba(0, 0, 0, 0.15)',
      duration: 0.5,
      ease: 'power4.inOut',
    });
  };

  onMouseLeave = (e: MouseEvent) => {
    gsap.to(e.target, {
      boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.15)',
      scale: 1,
      rotateY: 0,
      rotateX: 0,
    });
  };

  onMouseMove = (e: MouseEvent) => {
    const currentTarget = e.currentTarget;
    const targetElm = e.target as HTMLElement;
    if (!targetElm) return;
    const x = targetElm.clientWidth - e.offsetX * 2;
    const y = targetElm.clientHeight - e.offsetY * 2;
    const rx = -x / 43;
    const ry = y / 32;
    gsap.to(currentTarget, {
      rotateY: rx,
      rotateX: ry,
    });
  };
}
