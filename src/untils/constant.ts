import { ref } from "vue";

export const SKIN = ['auto', 'light', 'dark'] as const;
export type Skin = (typeof SKIN)[number];

export const PAGE = ["首页","关于","论坛","资料","主题设置","个人主页/登录"] as const;
export type Page = (typeof PAGE)[number]


export const EQUIPMENT = ["pc","phone"] as const
export type Equipment = (typeof EQUIPMENT)[number]
export let equipment = ref("pc");
export const setEquipment = (Equipment:Equipment)=>{
    console.log(equipment.value,Equipment)
    equipment.value = Equipment
}