const languages = ['C', 'C++', 'JAVA', 'Python'];
languages.forEach(element => {
    console.log(element.toLowerCase());
});

languages.forEach((element, index) => {
    console.log(index + 1, element);
});