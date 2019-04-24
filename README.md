[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling Practice

Now that's you've learned about non-relational databases and how to structure them with schemas, let's practice looking at actual data sets and creating a structure based on the documents inside of them.

## Prerequisites

* MongoDB
* Mongoose
* Data Modeling & Schemas

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
4. Fulfill the listed requirements.

Starter code is available in the `data-sets` directory. You are
required to turn in your submission by making a pull request on the original
repository.

Unless otherwise specified on the calendar or by an instructor, homework is due
the next morning by 9:00am.

## Requirements

In the `data-sets` directory, you'll find a few subdirectories. Each of these subdirectories contains a `json` file with a data set. Based on the data set, create a file representing each model that includes:

- Proper naming convention of the model's `js` file
- A variable `Schema` set equal to `mongoose.Schema`
- Model defined using the `Schema` method
- Properties that correlate with the data set
- Appropriate data types for each property
- Export schema using `module.exports`

For example, for the data set:
```js
[
    {
        "name": "Erin",
        "hometown": "Villanova, PA",
        "years-in-dc": 8,
        "loves-to-code": true
    }
]
```

Your model file (named `Person.js` or something else semantic, should look like this:

```js
const Schema = mongoose.Schema

const Person = new Schema({
    name: String,
    hometown: String,
    "years-in-dc": Number,
    "loves-to-code": Boolean
})

module.exports = mongoose.model('Person', Peron)
```

For the examples that require parent and child schemas, use the Author and Cookbook solution that we learning in class as a reference! Hint: An array of objects will be a clue!

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
