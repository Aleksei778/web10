function usualList(type, innerTag, targetSelector, ...items) {
    const $list = $(`<${type}>`);

    items.forEach(item => {
        const $listItem = $('<li>').append(
            $(`<${innerTag}>`).text(item)
        );
        $list.append($listItem);
    });

    $(`#${targetSelector}`).after($list);
}

function aList(type, hrefArray, targetSelector, style, ...items) {
    const $list = $(`<${type}>`);

    if (style) {
        $list.attr('style', style);
    }

    items.forEach((item, index) => {
        const $listItem = $('<li>').append(
            $('<a>')
                .attr('href', hrefArray[index])
                .text(item)
        );
        $list.append($listItem);
    });

    $(`#${targetSelector}`).after($list);
}