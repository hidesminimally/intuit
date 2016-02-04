#
# Find the 3rd, 58th and 10,001th prime number.
#
import itertools
def find_prime(n):
  """
  Returns the Nth prime number.
  """
  D = {}
  primes = {}
  curr_prime = 1
  for q in itertools.count(2):
    p = D.pop(q, None)
    if p is None:
      if curr_prime == n:
        return q
      curr_prime += 1
      D[q * q] = q
    else:
      x = p + q
      while x in D:
        x += p
      D[x] = p
