function extractFile(link) {
    let path = link.split('\\');
    let file = path[path.length - 1];
    let dotIdx = file.lastIndexOf('.');
    let fileName = file.slice(0, dotIdx);
    let fileExtension = file.slice(dotIdx + 1, file.length);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile(
    'C:\\Internal\\training-internal\\Template.pptx'
);

// extractFile(
//     'C:\\Projects\\Data-Structures\\LinkedList.cs'
// );