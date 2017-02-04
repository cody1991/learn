function ArraySeq(array) {
  this.pos = -1
  this.array = array
}

ArraySeq.prototype.next = function () {
  if (this.pos >= this.array.length - 1) {
    return false
  }
  this.pos++;

  return true
}

ArraySeq.prototype.current = function () {
  return this.array[this.pos]
}

function RangeSeq(from, to) {
  this.pos = from - 1
  this.to = to
}

RangeSeq.prototype.next = function () {
  if (this.pos >= this.to) {
    return false
  }
  this.pos++;

  return true
}

RangeSeq.prototype.current = function () {
  return this.pos
}

function logFive(sequence) {
  for (let i = 0; i < 5; i++) {
    if (!sequence.next()) {
      break;
    }
    console.log(sequence.current())
  }
}

logFive(new ArraySeq([1, 2]))
logFive(new RangeSeq(100, 1000))

function ArraySqe2(array, offset) {
  this.array = array
  this.offset = offset
}

ArraySqe2.prototype.rest = function () {
  return ArraySqe2.make(this.array, this.offset + 1)
}
ArraySqe2.prototype.head = function () {
  return this.array[this.offset]
}
ArraySqe2.make = function (array, offset) {
  if (offset == null) {
    offset = 0
  }
  if (offset >= array.length) {
    return null
  } else {
    return new ArraySqe2(array, offset)
  }
}

function RangeSeq2(from, to) {
  this.from = from
  this.to = to
}

RangeSeq2.prototype.rest = function () {
  return RangeSeq2.make(this.from + 1, this.to)
}
RangeSeq2.prototype.head = function () {
  return this.from
}
RangeSeq2.make = function (from, to) {
  if (from > to) {
    return null
  } else {
    return new RangeSeq2(from, to)
  }
}

logFive(new ArraySeq([1, 2]))
logFive(new RangeSeq(100, 1000))
