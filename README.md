# Summary Page Test
Designing and Implementing Summary Page for CRM in separate Repo to avoid breaking build. This summary page should have the ability to 
* Add Custom Fields
* Display Default Fields
* Move around sections in summary
* Create, modify, and delete sections in summary
* Create, modify, and delete custom and non-custom EDITABLE fields (some fields should not be edited, such as those automatically populated by API
* Notify the user when a field has been updated

### In order to run it and test it out, 
1. Clone the Repo
2. Run `npm install` in the base directory of the cloned files
3. Run `npm start` to start a dev server
4. Navigate to localhost:3000/dashboard on your browser
5. You should see the summary page implementation!

# This summary page implementation uses a modified Contract data structure, see example test data below 
```jsx
export const testData = {
    fields: {
        NAICS: {
            type: "string",
            value: "515124",
            editable: false,
            label: "NAICS"
        },
        active: {
            type: "bool",
            value: true,
            editable: false,
            label: "Active Status",
        },
        archive_date: {
            value: null,
            type: "string",
            editable: false,
            label: "Archive Date",
        },
        solicitation_number: {
            value: "SS20239905",
            type: "string",
            editable: false,
            label: "Solicitation Number",
        },
        setaside: {
            value: "SBA",
            type: "string",
            editable: false,
            label: "Set Aside",
        },
        title: {
            value: "Sources Sought-IT Research and Consulting",
            type: "string",
            editable: false,
            label: "Title",
        },
        vendor_code: {
            value: "0.13.1301.1331L5",
            type: "string",
            editable: false,
            label: "Vendor Code",
        },
        vendor_name: {
            value: "COMMERCE, DEPARTMENT OF.OFFICE OF THE SECRETARY.DEPT OF COMMERCE ESO",
            type: "string",
            editable: true,
            label: "Vendor Name",
        },
        description: {
            value: "<p>Responses are due <strong><u>January 17, 2023, at 10:00 AM Eastern Time</u></strong>.&nbsp; Respondents shall submit responses by email to kbaker@doc.gov.&nbsp; Please reference &ldquo;SS20239905&lsquo;&rsquo; in all communications.</p> <p>This Notice is for information and planning purposes and is not be construed as a commitment by the Government nor will the Government pay for information solicited.&nbsp; Respondents will not be notified of the results of evaluation.&nbsp; Respondents deemed fully qualified will be considered in any resultant solicitation for the requirement.</p> <p>The Government reserves the right to consider a small business or 8(a) set-aside based on responses hereto.&nbsp; &nbsp;</p>",
            type: "HTML",
            editable: false,
            label: "Description",
        },
        federal_supply_code: {
            value: "R499",
            type: "string",
            editable: false,
            label: "FSC/PSC",
        },
        id: {
            value: "2b9d23016e1a43fba001b4ec0ccea148",
            type: "string",
            editable: false,
            label: "UUID",
        },
        page_link: {
            value: "https://sam.gov/opp/2b9d23016e1a43fba001b4ec0ccea148/view",
            type: "link",
            editable: false,
            label: "Link to Page",
        },
        country_of_performance: {
            value: "USA",
            type: "string",
            editable: false,
            label: "Country",
        },
        state_of_performance: {
            value: "OH",
            type: "string",
            editable: false,
            label: "State",
        },
        city_of_performance: {
            value: "COLUMBUS",
            type: "string",
            editable: false,
            label: "City",
        },
        award_date: {
            value: "",
            type: "string",
            editable: false,
            label: "Award Date",
        },
        award_value: {
            value: 5000000,
            type: "currency", 
            editable: false,
            label: "Award Amount"
        },
        response_due_date: {
            value: "",
            type: "",
            editable: false,
            label: "Response Due Date",
        },
        department: {
            value: "",
            type: "string",
            editable: false,
            label: "Department",
        },
        agency: {
            value: "",
            type: "string",
            editable: false,
            label: "Agency",
        },
        office: {
            value: "",
            type: "string",
            editable: false,
            label: "Office",
        },
        client: {
            value: "",
            type: "string",
            editable: true,
            label: "Client",
        }
    },
    summary: {
        column_1: [
            {
                title: "Basic Info",
                elements: [
                    'NAICS',
                    'active',
                    'setaside',
                    'id',
                    'description',
                ],
            },
            {
                title: "Additional Info",
                elements: [
                    'NAICS',
                    'active',
                    'setaside',
                    'id',
                    'description',
                ],
            },
    
        ],
        column_2: [
            {
                title: "Historic",
                elements: [
                    'setaside',
                ],
            },
        ]
    }
}

```
