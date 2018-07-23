const getSettings = async function (app) {
    return await app.$storyapi.get(`cdn/stories/settings`, {
        version: 'draft'
    });

    // try {
    //     const settings = await api.getByUID('settings', 'dolcecanapa');
    //     //console.log(settings);
    //     return settings
    //     } catch (e) {
    //         error({ message: 'Settings not found', statusCode: 404 })
    //     }
}


export default async function ({ store, route, app }) {
    let res  = await getSettings (app);
    let data = res.data.story.content;
    
    if (typeof data != 'undefined'){
        store.commit('SET_SETTINGS', data)
    }

}
