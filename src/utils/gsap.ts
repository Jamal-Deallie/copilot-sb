import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP, CustomEase, Flip);

export { gsap, useGSAP, ScrollTrigger, SplitText, CustomEase, Flip };
