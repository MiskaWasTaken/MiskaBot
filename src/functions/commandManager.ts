import index from '@src/index'
const client = index.client

function getAllCommandIDs() {
    const IDs = []

    client.commandHandler.modules.forEach(command => {
        if (command.category.id.toLowerCase().includes('owner')) { return }
        if (command.category.id.toLowerCase().includes('testing')) { return }
        if (command.id == 'templateCommand') { return }

        if (command.ownerOnly) { return }

        else { IDs.push(command.id) }
    })

    return IDs
}

export default {
    getAllCommandIDs
}