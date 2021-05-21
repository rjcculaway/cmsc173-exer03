import { atom, WritableAtom } from 'jotai';

import camera from "../assets/img/pexels-math-90946-zoomed.png";

export const productImageAtom: WritableAtom<string, string> = atom(camera);