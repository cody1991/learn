// minHeight() returns a number indicating the minimum height this cell requires (in lines).
// minWidth() returns a number indicating this cell’s minimum width (in characters).
// draw(width, height) returns an array of length height, which contains a series of strings that are each width characters wide. This represents the content of the cell.

// The rows variable will hold an array of arrays, with each inner array representing a row of cells.
function rowHeights(rows) {
  // It uses reduce to compute the maximum height of an array of cells and wraps that in map in order to do it for all rows in the rows array.
  return rows.map(function (row) {
    return row.reduce(function (max, cell) {
      return Math.max(max, cell.minHeight())
    }, 0)
  })
}

// Using a variable name starting with an underscore (_) or consisting entirely of a single underscore is a way to indicate (to human readers) that this argument is not going to be used
function colWidths(rows) {
  // Things are slightly harder for the colWidths function because the outer array is an array of rows, not of columns. I have failed to mention so far that map (as well as forEach, filter, and similar array methods) passes a second argument to the function it is given: the index of the current element. By mapping over the elements of the first row and only using the mapping function’s second argument, colWidths builds up an array with one element for every column index. The call to reduce runs over the outer rows array for each index and picks out the width of the widest cell at that index.
  return rows[0].map(function (_, i) {
    return rows.reduce(function (max, row) {
      // console.log(row[i].minWidth())
      return Math.max(max, row[i].minWidth())
    }, 0)
  })
}

function drawTable(rows) {
  let heights = rowHeights(rows)
  let widths = colWidths(rows)
  console.log(heights)
  console.log(widths)

  function drawLine(blocks, lineNo) {
    return blocks.map(function (block) {
      return block[lineNo]
    }).join(' ')
  }

  function drawRow(row, rowNum) {
    let blocks = row.map(function (cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum])
    })
    return blocks[0].map(function (_, lineNo) {
      return drawLine(blocks, lineNo)
    }).join("\n")
  }

  return rows.map(drawRow).join('\n')
}

function repeat(string, times) {
  let result = ''
  for (let i = 0; i < times; i++) {
    result += string
  }
  return result
}

function TextCell(text) {
  this.text = text.split('\n')
}

TextCell.prototype.minWidth = function () {
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length)
  }, 0)
}

TextCell.prototype.minHeight = function () {
  return this.text.length
}

TextCell.prototype.draw = function (width, height) {
  console.log(this.text, width, height)
  let result = []
  for (let i = 0; i < height; i++) {
    let line = this.text[i] || ''
    result.push(line + repeat(" ", width - line.length))
  }
  return result
}

let rows = []
for (let i = 0; i < 5; i++) {
  let row = []
  for (let j = 0; j < 5; j++) {
    if ((j + i) % 2 == 0) {
      row.push(new TextCell('##'))
    } else {
      row.push(new TextCell("  "))
    }
  }
  rows.push(row)
}

console.log(drawTable(rows))

function UnderlinedCell(inner) {
  this.inner = inner
}

UnderlinedCell.prototype.minWidth = function () {
  return this.inner.minWidth()
}

UnderlinedCell.prototype.minHeight = function () {
  return this.inner.minHeight() + 1
}

UnderlinedCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat("-", width)])
}

function dataTable(data) {
  let keys = Object.keys(data[0])
  let headers = keys.map(function (name) {
    return new UnderlinedCell(new TextCell(name))
  })

  let body = data.map(function (row) {
    return keys.map(function (name) {
      return new TextCell(String(row[name]))
    })
  })

  return [headers].concat(body)
}

console.log(dataTable(require('./mountains.js')))
console.log(drawTable(dataTable(require('./mountains.js'))))
