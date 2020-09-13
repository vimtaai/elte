#include <iostream>
#include <vector>

using namespace std;

int main()
{
  // Sablon-típus
  vector<int> v;
  v.push_back(4);
  v.push_back(6);
  v.push_back(8);
  v.push_back(10);
  v.push_back(12);
  cout << v.size() << endl;
  cout << v.capacity() << endl;

  v.resize(10);
  cout << v.size() << endl;
  cout << v.capacity() << endl;

  int N = 5;
  vector<int> v2;
  for (int i = 0; i < N; ++i)
  {
    int x;
    cin >> x;
    v2.push_back(x);
  }

  vector<int> v3;
  v3.resize(N);
  cout << v3.size() << endl;
  cout << v3.capacity() << endl;
  for (int i = 0; i < N; ++i)
  {
    cin >> v3[i];
  }

  // 10 db 100-as értéket tartalmazó vektor
  vector<int> v4(10, 100);

  for (int i = 0; i < v3.size(); ++i)
  {
    cout << v3.at(i) << " ";
  }
  cout << endl;

  return 0;
}
