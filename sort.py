#
# Sort the list in numeric order
#
def sort(array):
  """
  Performs recursive quicksort on the array and returns the sorted array.
  """
  if len(array) > 1:
    greater = []
    less = []
    equal  = []
    pivot = array[0]
    for x in array:
      if x < pivot:
        less.append(x)
      elif x == pivot:
        equal.append(x)
      elif x > pivot:
        greater.append(x)
    return sorted(less) + equal + sorted(greater)
  else:
    return array
