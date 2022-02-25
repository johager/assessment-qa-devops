
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

async function clickDraw() {
    await driver.findElement(By.id('draw')).click()
}

async function clickAddToDuo() {
    await driver.findElement(By.xpath('//*[@class="bot-btn"]')).click()
}

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Div #choices shows up after select Draw', async () => {
    await clickDraw()
    const divChoices = await driver.findElement(By.id('choices'))
    const displayed = await divChoices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Div #player-duo shows up after select Add to Duo', async () => {
    await clickDraw()
    await clickAddToDuo()
    const divPlayerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await divPlayerDuo.isDisplayed()
    expect(displayed).toBe(true)
})

test('Button #duel shows up after select two (2) Add to Duo', async () => {
    await clickDraw()
    await clickAddToDuo()
    await clickAddToDuo()
    const divPlayerDuo = await driver.findElement(By.id('duel'))
    const displayed = await divPlayerDuo.isDisplayed()
    expect(displayed).toBe(true)
})