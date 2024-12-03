Build a Library Management page.

![image](https://github.com/user-attachments/assets/8f6343e8-2547-4bb5-9055-da17a5c92801)

Instructions

The following instructions are required for the tests to pass.

Add an HTML input element with id searchInput inside an HTML container element
Add an HTML container element with id searchResults to display the search results from the HTTP response
Functionality to be added

By following the above instructions, achieve the given functionality.

When a value is provided in the HTML input element with id searchInput and Enter key is pressed,
Make an HTTP GET request to the Books URL with the query parameter title as the value of the searchInput element
Loader should be displayed using the Bootstrap component spinner while fetching the data
After the data is fetched successfully, display the search results in the searchResult element. If search results from HTTP response are:
Empty, display "No results found" in the searchResults element
Non-empty, append the result items to the HTML container element with id searchResults. Each result item should consist of:
An HTML image element with src attribute value as the value of the key imageLink from HTTP response
An HTML paragraph element with text content as the value of the key author from HTTP response

Image URLs :
https://assets.ccbp.in/frontend/dynamic-webapps/library-management-bg.png

Colors :
#323f4b
#ffffff

Font-families :
Roboto
