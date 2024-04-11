import {$} from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
     $(`android=new UiSelector().resourceId.("com.google.android.calculator:id/digit_2")`).click();
    })  
})

