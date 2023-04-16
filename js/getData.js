export const getData = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка запроса по адресу: ${url}`)
    } else {
        return await response.json()
    }
}