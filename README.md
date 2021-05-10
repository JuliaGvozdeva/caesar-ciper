# caesar-ciper

## How to start this project

1. If you don't have Node.js and npm installed, use the link [Configuring your local environment](https://docs.npmjs.com/getting-started/configuring-your-local-environment) to install it. If you have Node.js and npm installed, skip to step 2.

2. Click on “Clone or download” and copy the URL.

3. Use the git clone command along with the copied URL from earlier.

`$ git clone https://github.com/JuliaGvozdeva/caesar-ciper.git`

4. Open the clonned project,

5. Go to the develop branche use the comand:

`$ git checkout develop`

6. Install dependencies in the root of the project using the command:

`npm install`,

7. Use comands for run this project:
The Action and Offset fields are required. Also you can add arguments with the input output file. You can write data for encoding/decoding functions in the console line if you don't write the input file path. The result of the encoding / decoding function is displayed in the console line if you do not specify the path to the output file.

`Example: node app.js -a encode -s 7 -i "./input.txt" -o "./output.txt"`
 - `-s, --shift: a shift `
 - `-i, --input: an input file`
 -  `-o, --output: an output file`
 - `-a, --action: an action encode/decode`
