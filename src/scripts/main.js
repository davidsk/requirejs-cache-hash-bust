app.hashData.finally(() => {
    require.config({
        baseUrl: "/src/scripts/",
        paths: {
            "module": "modules/inModuleFolder",
            "page": "pages/inPagesFolder"
        },
        urlArgs: function(id, url) {
            console.log({id});
            console.log({url});

            url = url.replace(this.baseUrl, '');
            
            if(window.app.fileHashes.hasOwnProperty(url)){
                return "?" + app.fileHashes[url];
            }

            return "";
        }
    });
})