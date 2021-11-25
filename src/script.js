import { Amplify, DataStore } from 'aws-amplify'
import awsconfig from './aws-exports'

import { DeviceInventory } from './models'

Amplify.configure(awsconfig)


let draft = {}

window.addEventListener('load', async() => {
    const drafts = await DataStore.query(DeviceInventory, deviceinventory => deviceinventory.draft('eq', true))
})

document.querySelector('.create-form').addEventListener('submit', async e => {
    try {
        e.preventDefault()
        const device = document.querySelector('#device').value
        const brand = document.querySelector('#brand').value
        const model = document.querySelector('#model').value
        const serial = document.querySelector('#serial').value
        const inUse = document.querySelector('#inUse').value
        const location = document.querySelector('#location').value




        const newDeviceInventory = await DataStore.save(
            new DeviceInventory({
                device,
                brand,
                model,
                serial,
                inUse,
                location
            })
        )
        console.log(newDeviceInventory)
    } catch (err) {
        console.error(err)
    }
})