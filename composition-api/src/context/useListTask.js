import { reactive, toRefs, ref, computed } from "vue";

    const formData = reactive({
        description: "",
        priority: "Medium",
    });
    const priorities = ref(["High", "Medium", "low"]);
    const search = ref("");
    const list = ref([]);

    const add = () => {
        if (formData.description === "") {
            return;
        }
        const { description, priority } = formData;
        list.value.push({
            description,
            priority,
        });
        formData.description = "";
        formData.priority = "Medium";
    };

    const listFilter = computed(() =>
        list.value.filter((e) =>
            e.description.toLowerCase().includes(search.value.toLowerCase())
        )
    );

    export default { ...toRefs(formData), priorities, add, listFilter, search };

