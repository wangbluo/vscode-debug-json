#!/usr/bin/env python3
"""
Sample Python application for debugging with VS Code.
This demonstrates various debugging scenarios.
"""

import sys
import json
import time
from typing import List, Dict, Any


def calculate_fibonacci(n: int) -> int:
    """Calculate fibonacci number - good for stepping through"""
    if n <= 1:
        return n
    
    a, b = 0, 1
    for i in range(2, n + 1):
        # Add breakpoint here to see iteration
        a, b = b, a + b
    
    return b


def process_data(data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """Process a list of data items"""
    processed = []
    
    for item in data:
        # Add breakpoint here to examine each item
        processed_item = {
            'id': item.get('id', 0),
            'name': item.get('name', 'Unknown'),
            'processed': True,
            'timestamp': time.time()
        }
        processed.append(processed_item)
    
    return processed


def simulate_error(should_error: bool = False):
    """Simulate an error for debugging exception handling"""
    if should_error:
        raise ValueError("This is a simulated error for debugging")
    return "No error occurred"


def main():
    """Main function demonstrating various debugging scenarios"""
    print("VS Code Python Debugging Example")
    print("=" * 40)
    
    # Example 1: Simple calculation
    fib_result = calculate_fibonacci(10)
    print(f"Fibonacci(10) = {fib_result}")
    
    # Example 2: Data processing
    sample_data = [
        {'id': 1, 'name': 'Alice'},
        {'id': 2, 'name': 'Bob'},
        {'id': 3, 'name': 'Charlie'}
    ]
    
    processed = process_data(sample_data)
    print(f"Processed {len(processed)} items:")
    for item in processed:
        print(f"  {item}")
    
    # Example 3: Command line arguments
    if len(sys.argv) > 1:
        print(f"Command line arguments: {sys.argv[1:]}")
        
        # Try to process as number
        try:
            number = int(sys.argv[1])
            fib_result = calculate_fibonacci(number)
            print(f"Fibonacci({number}) = {fib_result}")
        except ValueError:
            print(f"'{sys.argv[1]}' is not a valid number")
    
    # Example 4: Error handling (set to True to test exception debugging)
    try:
        result = simulate_error(False)
        print(f"Error simulation result: {result}")
    except ValueError as e:
        print(f"Caught error: {e}")
    
    print("Program completed successfully!")


if __name__ == "__main__":
    main()