## Express basic Server with typescript 

Hello developers ,hope you all are well.Basically in development sector most irritating thing is setup a server then code . that's I have created a basic server which contains some validations handlers .Errors are the most common things in development . So backend developers need to structure this errors so that client / frontend site can understand easily what's going on . that's why I have created this type of folder structure which will make your development journey smooth . so follow the steps to setup this basic Express server .

### Features used

- Global handlers
  - Cast error handlers (mongoose)
  - validation error handlers (mongoose)
  - zod validation error handlers (zod)

-  Global Interface 
    - generic error interface
    - jwt payload interface

- utils 
    - catchAsync (which resolve try catch promise functions in express)
    - global error (which returns same structured errors to client site )
    - validation middleware (which solves to validate zod schema in body)
  
    ```
    const validate = z.object({
        body : z.object({
            // your code here
        })
    }) 
    ```

### step 1 

```
git clone https://github.com/Shatab99/basic-express-server-ts.git
```

### step 2

```
cd basic-express-server-ts
```

### step 3

```
rmdir /s /q .git
```

### step 4

```
npm i 
```

### step 5

```
mkdir .env
```

### step 6 (Paste the files on env and configure it with your own way)

```
Node_ENV= development
PORT=5000
DATABASE_URL= <Your mongo db uri>
DefaultPass = <Your default password>
jwt_secret= <Your jwt secret gengerated from node >
```




<div>
<br>
<br>
</div>

## Folder structure look like 

![Screenshot](./assets/Screenshot%202024-11-05%20093115.png)



