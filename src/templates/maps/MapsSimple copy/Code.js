function myFunction() {

}

function doGet(request) {
    return HtmlService.createTemplateFromFile('src/index').evaluate()
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

