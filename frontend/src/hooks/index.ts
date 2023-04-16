import {Ref, ref} from "vue";

// хук для плавного появления компонентов сразу при загрузке
export const useFadeAppear = ():Ref => {
    const show = ref(false);
    setTimeout(() => show.value = true, 0);
    return show
}
