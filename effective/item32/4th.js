function eulogize(p) {
    console.log(p.name);
    const { birth } = p;
    if (birth) {
        console.log(`was born on ${birth.date} in ${birth.place}.`);
    }
}
export {};
