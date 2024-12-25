# Simple usage for understand Redux-Toolkit

## Redux
 Is state management library of JavaScript apps

## Instalisation
```
yarn add @reduxjs/toolkit react-redux
```
## Step1:
Create file store.ts

## Step2: 
Wrap main file by ```<Provider store={store}>```

## Step3:
Create Slice 
## Note:
   reducers consist of actions each action is function(state,payload) 
   state: let you to access any property initialstate 
   payload: Receive a new value and it always opject

## Step4:
use
 - useSelector() to get values from store
 - useDispatch(Excute Function) // use to execute a specific action
  
