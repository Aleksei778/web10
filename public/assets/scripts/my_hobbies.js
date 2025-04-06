function usualList(type, innerTag) {
    // Начало списка
    document.write("<" + type + ">");

    // Проход по всем аргументам, начиная со второго
    for (let i = 2; i < usualList.arguments.length; i++) {
        document.write("<li>" + `<${innerTag}>` + usualList.arguments[i] + `</${innerTag}>` + "</li>");
    }

    // Конец списка
    document.write("</" + type + ">");
}

function aList(type, hrefArray, style) {
    // Начало списка
    if (style !== "") {
        document.write("<" + type + ` style="${style}">`);
        console.log("<" + type + ` style="${style}">`);
    } else {
        document.write("<" + type + ">");
    }

    // Проход по всем аргументам, начиная со второго
    for (let i = 3, j = 0; i < aList.arguments.length; i++, j++) {
        document.write("<li>" + `<a href="${hrefArray[j]}">` + aList.arguments[i] + `</a>` + "</li>");
        console.log("<li>" + `<a href="${hrefArray[j]}">` + aList.arguments[i] + `</a>` + "</li>");
    }

    // Конец списка
    document.write("</" + type + ">");
}