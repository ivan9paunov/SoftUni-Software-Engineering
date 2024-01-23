function editElement(ref, match, replacer) {
    const content = ref.textContent;
    ref.textContent = content.split(match).join(replacer);

    // Var. 2
    // const matcher = new RegExp(match, 'g');
    // const edited = content.replace(matcher, replacer);
    // ref.textContent = edited;
}