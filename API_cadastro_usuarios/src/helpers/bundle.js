class Bundle {

    setBundle(request, models, bundleName) {

        if (bundleName) {

            request.session[bundleName] = {
                models: models,
            }

        } else {

            request.session.data = {
                models: models,
            }
        }
    }

    getBundle(request, bundleName) {


        if (bundleName) {
            const data = request.session['bundleName']
            request.session.data = null

            if (!data) {
                return {
                    models: null,
                    errors: null
                }
            } else {
                return data
            }
        } else {

            const data = request.session.data
            request.session.data = null

            if (!data) {
                return {
                    models: null,
                    errors: null
                }
            } else {

                return data
            }
        }
    }
}

export default new Bundle()